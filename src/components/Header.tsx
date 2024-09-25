import React from "react";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "../css/header.css";
type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className="header">
      <div>
        <FontAwesomeIcon id="svg" icon={faRightToBracket} />
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">Welcome, {user.name}</span>
            <Button primary size="small" onClick={onLogout} label="Sign Out" />
          </>
        ) : (
          <>
            <Button primary size="small" onClick={onLogin} label="Sign In" />
            <Button size="small" onClick={onCreateAccount} label="Sign Up" />
          </>
        )}
      </div>
    </div>
  </header>
);
