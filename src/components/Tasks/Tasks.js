import React from 'react'
import "./Tasks.css";
import Collapsible from '../Collapsible/Collapsible';
import { useState } from 'react';
// import actions from '../../actions';

function Tasks() {
    let [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

    let onSaveClick = () => {
        setIsNewTaskOpen(!isNewTaskOpen);
    };

    let onCancelClick = () => {
        setIsNewTaskOpen(!isNewTaskOpen);
    };

    return (
        <div className='outer-container'>
            <div className="container">
                <div className="app-title-container">
                    <div className="app-title">
                        <h1>Tasks</h1>
                    </div>

                    <div className="create-button-container">

                        {isNewTaskOpen === false ?
                            <button className="button create-button"
                                onClick={() => { setIsNewTaskOpen(!isNewTaskOpen); }}>
                                <i className="fa fa-calendar-plus"></i>
                                &nbsp;&nbsp;
                                Create
                            </button> : null}
                    </div>
                </div>

                <Collapsible isOpen={isNewTaskOpen}>

                    <div className="new-task-container">
                        <h4 className="new-task-title">New Task</h4>

                        {/* {Form Group Starts} */}
                        <div className="form-group">
                            <label className='form-label' htmlFor='task-title'>
                                Task Title:
                            </label>

                            <div className="form-input">
                                <input type="text" className='text-box'
                                    id='task-title'
                                    placeholder='Task Title' />

                            </div>

                        </div>

                        {/* {Form Group Ends} */}


                        {/* {Form Group Starts} */}
                        <div className="form-group">
                            <label className='form-label' htmlFor='task-date-time'>
                                Task Date and Time:
                            </label>
                            <div className="form-input">

                                <input type="datetime-local" className='text-box'
                                    id='task-date-time'
                                    placeholder='Task Date and Time' />

                            </div>
                        </div>

                        {/* {Form Group Ends} */}

                        <div className="button-group">
                            <button className="button save-button"
                                onClick={() => { onSaveClick(); }}
                            >
                                <i className="fa fa-save"></i>&nbsp;&nbsp;
                                Save Task
                            </button>

                            <button className="button cancel-button"
                                onClick={() => { onCancelClick(); }}>
                                <i className="fa fa-window-close"></i>&nbsp;&nbsp;
                                Cancel
                            </button>
                        </div>
                    </div>
                </Collapsible>

                <div className="search-box">
                    <input type="search"
                        placeholder='Search' />
                    <i className="fa fa-search"></i>
                </div>

                <div className="content-body">
                    {/* task starts  */}
                    <div className="task">
                        <div className="task-body">
                            <div className="task-title">
                                <i className="fa fa-thumbtack"></i>
                                <span className="task-title-text">Bob's Appointment</span>
                            </div>
                            <div className='task-subtitle'>
                                <i className='far fa-clock'></i>
                                <span className="task-subtitle-text">
                                    January 18, 1997
                                </span>
                            </div>
                        </div>

                        <div className="task-options">
                            <button className="icon-button" title='Delete'>&times;</button>
                        </div>

                    </div>

                    {/* task ends  */}
                </div>

            </div>
        </div >
    )
}

export default Tasks