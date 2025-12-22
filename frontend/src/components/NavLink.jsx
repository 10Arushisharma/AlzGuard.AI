import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({
  to,
  className = "",
  activeClassName = "",
  pendingClassName = "",
  ...props
}) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive, isPending }) =>
        [
          className,
          isActive ? activeClassName : "",
          isPending ? pendingClassName : ""
        ].join(" ")
      }
      {...props}
    />
  );
};

export default NavLink;
