import '../../style/Contact.css';

export const Contact=()=>{
    return (
        <div className="container">
          <div className="inner-container">
            <div className="header-text">בא נשמע אותך</div>
            <div className="input-container">
              <div className="input-box">
              <input type="email" className="input-text" placeholder=' האימייל שלי'/>
              </div>
              <div className="input-box">
                <input type="text" className="input-text" placeholder='השם שלי'/>
              </div>
            </div>
          </div>
          <div className="input-box tall">
                <input type="text" className="input-text" placeholder=' מה שרציתי לומר' />
              </div>

          <div className="button-container">
            <div className="circle" />
            <div className="arrow" />
            <div className="button-text">יש!!! מדברים</div>
          </div>
        </div>
      );
    };
    

export default Contact;