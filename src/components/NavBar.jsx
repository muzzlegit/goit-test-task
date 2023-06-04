import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="h-[44px]">
      <div className="h-full flex justify-center items-center gap-[20px] border-b-2 border-border">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              boxSizing: 'border-box',
              padding: '4px 10px 8px 10px',
              fontSize: '20px',
              textDecoration: 'none',
              color: isActive ? '#7ebbd7' : '#373737',
              borderRadius: isActive ? '10px' : 'none',
            };
          }}
        >
          <span>HOME</span>
        </NavLink>

        <>
          <NavLink
            to="/tweets"
            style={({ isActive }) => {
              return {
                boxSizing: 'border-box',
                padding: '4px 10px 8px 10px',
                fontSize: '20px',
                textDecoration: 'none',
                color: isActive ? '#7ebbd7' : '#373737',
                borderRadius: isActive ? '10px' : 'none',
              };
            }}
          >
            <span>TWEETS</span>
          </NavLink>
        </>
      </div>
    </nav>
  );
};

export default NavBar;
