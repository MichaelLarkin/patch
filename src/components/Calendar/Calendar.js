import React from "react";
import dateFns from "date-fns";

import './Calendar.css';
import Row from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Detail from '../Detail/Detail';


let selectedDateIndex = -1;
let deployArray = [];

class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date()
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

        let thePropsData  = this.props.data.summary;

        if  (!thePropsData) {
            return <div>
                <h1>Awaiting Arrival of Asynchronous Data...</h1>
            </div>
        }

        let startDateFormatted = dateFns.format(startDate, "MM/DD/YYYY");
        let startDateIndex = thePropsData.findIndex(p => p.date===startDateFormatted);
        let dayIndex = startDateIndex;

        let selectedDateFormatted = dateFns.format(selectedDate, "MM/DD/YYYY");
        selectedDateIndex = thePropsData.findIndex(p => p.date===selectedDateFormatted);

        deployArray = thePropsData;

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

    onDateClick = day => {
        this.setState({
            selectedDate: day
        });
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
            <div className="calendar container-fluid">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
                <Detail startDateIndex={selectedDateIndex}
                        endDateIndex={selectedDateIndex} />
            </div>
        );
    }
}

export default Calendar;