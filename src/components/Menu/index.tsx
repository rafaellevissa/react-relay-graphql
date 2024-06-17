import { useAuthContext } from "../../hooks/useAuthContext";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  const { logout } = useAuthContext();

  return (
    <div className="flex flex-col h-full justify-around">
      <NavLink
        to="/transacao"
        className="block p-2 rounded-lg text-zinc-700 hover:bg-zinc-400 hover:text-white transition-colors"
      >
        Transação
      </NavLink>

      <div
        className="block p-2 rounded-lg text-zinc-700 hover:bg-zinc-400 hover:text-white transition-colors cursor-pointer"
        onClick={() => logout()}
      >
        <p>Logout</p>
      </div>
    </div>
  );
};
