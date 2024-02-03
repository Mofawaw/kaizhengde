import Items from "@/components/item/items";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomeRoute = location.pathname === '/';

  return (
    <section className="content padding-y-0">
      <div className="layer-text background-none">
        {isHomeRoute &&
          <Items itemProps={[
            { type: "h5", label: "Last Update Jan 24" },
            { type: "h5", label: "You Are Beautiful" }
          ]} />
        }
        {!isHomeRoute &&
          <Items itemProps={[
            { type: "h5", label: "Back", back: true, onClick: () => navigate("/") },
            { type: "h5", label: "Last Update Jan 24" },
            { type: "h5", label: "You Are Beautiful" },
          ]} />
        }
      </div>
    </section>
  )
}

export default Footer;
