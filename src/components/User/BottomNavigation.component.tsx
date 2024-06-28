import '../../style/BottomNavigation.css';

const BottomNavigation = () => {
    return (
      <div className="bottom-navigation">
        <div className="navigation-items">
          <div>צור קשר</div>
          <div>להזמנה</div>
          <div>החדרים</div>
          <div>אודות</div>
        </div>
        <img className='imgBottomNavigation' src="src/assets/logo.png" alt="logo" />
        </div>
    );
  };
  
  export default BottomNavigation;