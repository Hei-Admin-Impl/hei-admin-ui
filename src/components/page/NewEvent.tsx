import React from "react";
import { Link } from "react-router-dom";
import '../styleCss/NewEvent.css';


const loginPage = () => {
    return (
        <>
     <div className="Event-form-container mt-5">
      <form className="Event-form">
        <div className="Event-form-content">
          <h3 className="Event-form-title">New Event</h3>
          <div className="form-group mt-3">
            <label > <span className="labelEvent"> Date </span></label>
            <input
              type="date"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label > <span className="labelEvent"> Event Type </span></label>
            <br />
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <span>Course</span>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <span>Other</span>
            </div>
          </div>
          <div className="form-group mt-3">
            <label > <span className="labelEvent"> Start Time </span></label>
            <input
              type="time"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label > <span className="labelEvent"> End Time </span></label>
            <input
              type="time"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label ><span className="labelEvent">Place </span></label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="HEI (default)"
            />
          </div>
          <div className="form-group mt-3"></div>
          <div className="form-row align-items-center">
                <div className="col-auto my-1">
                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Group...</option>
                    <option value="1">G1</option>
                    <option value="2">G2</option>
                    <option value="3">G3</option>
                </select>
                </div>
            </div>    
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="reset" className="btn btn-light">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
    );
}
export default loginPage;