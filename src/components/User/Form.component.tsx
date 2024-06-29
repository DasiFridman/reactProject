import '../../style/Form.css'
export const Form = () => {
    return (
        <div id="body">
            <div className="form-container">
                <div className="form-content">
                    <div className="header">
                        <div className="header-title">בואו לשיר כמו זמרים!</div>
                        <div className="header-subtitle">בחרו חדר</div>
                        <div className="options">
                            <div className="option">
                                <div className="option-inner">
                                    <div className="option-text">
                                        <span>קלידסו<br /></span>
                                        <span>מלודיות רטקו</span>
                                    </div>
                                </div>
                                <input type="checkbox" className="option-background" />

                            </div>
                            <div className="option">
                                <div className="option-inner">
                                    <div className="option-text">
                                        <span>זימבבואה<br /></span>
                                        <span>ארומה אקזוטית</span>
                                    </div>
                                </div>
                                <input type="checkbox" className="option-background" />

                            </div>
                            <div className="option">
                                <div className="option-inner">
                                    <div className="option-text">
                                        <span>וילגייט<br /></span>
                                        <span>ארומת פאנק</span>
                                    </div>
                                </div>
                                <input type="checkbox" className="option-background" />
                            </div>
                        </div>
                        <br />
                        <div className="details">
                            <div className="detail">
                                <div className="detail-box">
                                    <select className="detail-select" name="" id="">
                                        <option value="" disabled selected hidden>מספר משתתפים</option>
                                        <option value="1" >1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">7</option>
                                        <option value="6">8</option>
                                        <option value="6">9</option>
                                        <option value="6">10</option>

                                    </select>
                                </div>
                            </div>
                                <input type="date" name="תאריך" className='detail-text'/>
                        </div>
                        <div className="header-subtitle">בחר בשעה הרצויה</div>
                        <div className="time-options">
                            <div className="time-option unselected">19:30</div>
                            <div className="time-option selected">18:00</div>
                            <div className="time-option selected">16:30</div>
                            <div className="time-option unselected">15:00</div>
                            <div className="time-option selected">13:30</div>
                            <div className="time-option unselected">12:00</div>
                        </div>
                        <div className="separator-bottom"></div>
                    </div>
                    <div className="next-button">
                    <img src="src/assets/Union.svg" alt="" />
                    <div className="next-button-text">לשלב הבא</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
