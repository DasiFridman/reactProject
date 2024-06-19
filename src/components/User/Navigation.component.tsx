import '../../style/Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation-container">
            <div className="phone-section">
                <div className="phone-wrapper">
                    <div className="phone-content">
                        <div className="phone-number">055855654</div>
                        <div className="phone-icon">
                            <div className="phone-icon-inner"></div>
                            <div className="phone-icon-detail"></div>
                            <div className="phone-icon-line1"></div>
                            <div className="phone-icon-line2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logo-section">
                <img className="logo" src="src/assets/logo.png" alt="logo" />
            </div>
            <div className="links-section">
                <div className="link-item">צור קשר</div>
                <div className="link-item">להזמנה</div>
                <div className="link-item">החדרים</div>
                <div className="link-item">אודות</div>
            </div>
        </div>
    );
};

export default Navigation;

