import React from 'react'
import "./Tasks.css";


function Tasks() {
    return (
        <div className='outer-container'>
            <div class="container">
                <div class="app-title-container">
                    <div class="app-title">
                        <h1>Tasks</h1>
                    </div>

                    <div class="create-button-container">

                        <button class="button create-button">
                            <i class="fa fa-calendar-plus"></i>
                            &nbsp;&nbsp;
                            Create
                        </button>
                    </div>
                </div>

                <div class="new-task-container">
                    <h4 class="new-task-title">New Task</h4>

                    {/* {Form Group Starts} */}
                    <div class="form-group">
                        <label className='form-label' htmlFor='task-title'>
                            Task Title:
                        </label>

                        <div class="form-input">
                            <input type="text" className='text-box'
                                id='task-title'
                                placeholder='Task Title' />

                        </div>

                    </div>

                    {/* {Form Group Ends} */}


                    {/* {Form Group Starts} */}
                    <div class="form-group">
                        <label className='form-label' htmlFor='task-date-time'>
                            Task Date and Time:
                        </label>
                        <div class="form-input">

                            <input type="datetime-local" className='text-box'
                                id='task-date-time'
                                placeholder='Task Date and Time' />

                        </div>
                    </div>

                    {/* {Form Group Ends} */}

                    <div class="button-group">
                        <button class="button save-button">
                            <i class="fa fa-save"></i>&nbsp;&nbsp;
                            Save Task
                        </button>

                        <button class="button cancel-button">
                            <i class="fa fa-window-close"></i>&nbsp;&nbsp;
                            Cancel
                        </button>
                    </div>
                </div>

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
                                <i class="fa fa-thumbtack"></i>
                                <span class="task-title-text">Bob's Appointment</span>
                            </div>
                            <div className='task-subtitle'>
                                <i className='far fa-clock'></i>
                                <span className="task-subtitle-text">
                                    January 18, 1997
                                </span>
                            </div>
                        </div>

                        <div class="task-options">
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