import '../../style/Information.css';

const Information = () => {
    return (
      <div className="information-container">
        <div className="title">רק בקריוקי</div>
        <div className="content-container">
          <div className="info-box">
            <div className="info-content">
              <div className="badge-container">
                <div className="badge">
                  חדשנות מנצחת
                </div>
              </div>
              <div className="info-text-container">
                <div className="info-text-title">עשרות מיקרופונים</div>
                <div className="icon">
                  <img src="src/assets/icon3.svg" alt="" />
             \
                </div>
              </div>
            </div>
            <div className="info-description">
              סינון נטפרי על המחשב, פלייבקים כשרים, ואווירה חרדית. החדרים נמצאים בלב ירושליים.
            </div>
          </div>
          <div className="info-box">
            <div className="info-content">
              <div className="badge-container">
                <div className="badge">
                  חוויה בלתי נשכחת
                </div>
              </div>
              <div className="info-text-container">
                <div className="info-text-title">מסיבות וימי הולדת</div>
                <div className="icon">
                 <img src="src/assets/icon2.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="info-description">
              אולמות קריוקי העומדים לרשותכם, בהם שרים כל החברים ביחד, לא מוותרים על אף קול!
            </div>
          </div>
          <div className="info-box">
            <div className="info-content">
              <div className="badge-container">
                <div className="badge">
                  בלעדי
                </div>
              </div>
              <div className="info-text-container">
                <div className="info-text-title">שמור</div>
                <div className="icon">
                <img src="src/assets/icon1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="info-description">
              סינון נטפרי על המחשב, פלייבקים כשרים, ואווירה חרדית. החדרים נמצאים בלב ירושליים.
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Information;
  