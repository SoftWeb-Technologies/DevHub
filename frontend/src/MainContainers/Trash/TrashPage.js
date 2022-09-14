import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Title } from "../../components";
import { EmptyCuateImg } from "../../constants/Images";
import { removeItemFromLibrary } from "../../redux/actions/libActions";
import { DashboardSideNavigation } from "../components";
import UserHeader from "../components/UserHeader/UserHeader";

import "./TrashPage.css";

const TrashPage = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { libItems } = useSelector((state) => state.lib);
  
  const [isNavActive, setIsNavActive] = useState(false);
  const [isPopUpBoxActive, setIsPopUpBoxActive] = useState(false);
  const [popUpData, setPopUpData] = useState(null);

  const removeItemFromLibrary = (id) => {
    dispatch(removeItemFromLibrary(id));
  };

  return (
    <div>
      <Title title="Trash" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <div id="trashpage">
        <UserHeader
          displayName={
            currentUser?.displayName || currentUser?.user?.name || "User"
          }
        />
        <div className="reminders__header">
          <h1>
            Your <span style={{ color: "#008bb7" }}>Trash!</span>
          </h1>
    </div>

        {libItems.length > 0 ? (
          <div
            className={`reminders__main__container  ${
              isNavActive ? "active" : ""
            }`}
            >
            {/* <div>{libItems.slice(0, 5).map((item, index) => {})}</div> */}
            </div>
        ) : (
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            >
            <div
              style={{
                minWidth: "250px",
                opacity: "0.7",
                pointerEvents: "none",
              }}
              >
            <img src={EmptyCuateImg} alt="empty-cuate" />
              </div>
              <h1 
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  opacity: "0.5",
                }}
                >
                Your Trash is Empty
              </h1>
            </div>
        )}
      </div>
    </div>
  );
};

export default TrashPage;