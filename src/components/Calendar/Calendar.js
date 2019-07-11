import React from "react";
import dateFns from "date-fns";

import './Calendar.css';
import Row from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Detail from '../Detail/Detail';


class Calendar extends React.Component {

    static today = new Date();
    static firstDayOfTheYear = new Date(Calendar.today.getFullYear(),0,1);
    static dayOfTheYear = Math.ceil((Calendar.today - Calendar.firstDayOfTheYear) / 86400000) - 1;

    constructor(props) {
        super(props);

        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            selectedDateIndex: Calendar.dayOfTheYear,
            selectedData: [],
            renderSelectedData: true
        };
    }

    renderHeader() {
        const dateFormat = "MMMM YYYY";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="col col-center">
                    <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        );
    }

    renderDays() {
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="days row">{days}</div>;
    }


    renderCells() {
        if (!this.props.data || !this.props.data.length) {
            return null
        }

        const {currentMonth, selectedDate} = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        let thePropsData =  this.props.data;

        if (!thePropsData) {
            return (<div><h3>Loading Calendar...</h3></div>)
        }

        let formattedStartDate = dateFns.format(startDate, "MM/DD/YYYY");
        let dayIndex = thePropsData.findIndex(p => p.date===formattedStartDate);

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`col cell ${
                            !dateFns.isSameMonth(day, monthStart)
                                ? "disabled"
                                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                            }`}
                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                    >
                        <div className="number">{formattedDate}</div>
                        <div className="bg">{formattedDate}</div>
                        <Container>
                            <Row>P:{thePropsData[dayIndex].prod}</Row>
                            <Row>U:{thePropsData[dayIndex].uat}</Row>
                            <Row>Q:{thePropsData[dayIndex].qa}</Row>
                            <Row>T:{thePropsData[dayIndex].test}</Row>
                            <Row>D:{thePropsData[dayIndex].dev}</Row>
                        </Container>
                    </div>
                );
                day = dateFns.addDays(day, 1);
                dayIndex = dayIndex + 1;
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }

        return <div className="body">{rows}</div>;
    }

    fetchSelectedData(selectedDate, selectedDateIndex) {
        const status = response => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response) }
            return Promise.reject(new Error(response.statusText))
        };

        const json = response => response.json();

        if (!selectedDate) { selectedDate = this.state.selectedDate }
        if (!selectedDateIndex) { selectedDateIndex = this.state.selectedDateIndex };

        const fetchFrom = "http://localhost:3000/detail/".concat(selectedDateIndex);

        fetch(fetchFrom)
            .then ( status )
            .then ( json )
            .then( data => {
                let theData = [];
                if (Array.isArray(data)) {
                    theData = data;
                }
                else {
                    theData.push(data);
                }
                this.setState( { selectedDate: selectedDate,
                                      selectedDateIndex: selectedDateIndex,
                                      selectedData: theData } );
            })
            .catch( error => { console.log("Detail request failed.", error)});
    }

    onDateClick = day => {
        let selectedDateIndex = Math.ceil((day - Calendar.firstDayOfTheYear) / 86400000);
        this.fetchSelectedData(day, selectedDateIndex);
    };

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    render() {
       return (
            <div>
                { this.state.renderSelectedData ?
                    <div className="calendar">
                        {this.renderHeader()}
                        {this.renderDays()}
                        {this.renderCells()}
                    </div>
                    : null
                }
                { this.state.renderSelectedData ?
                    <Detail className="detailDiv" selectedData={this.state.selectedData}/>
                    : null
                }
            </div>
        );
    }
}

export default Calendar;