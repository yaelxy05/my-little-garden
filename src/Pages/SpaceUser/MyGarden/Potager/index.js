import React, { useContext } from "react";
// import SCSS
import "./potager.scss";
// Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// Import Context
import { GetDataPotagerContext, DeletePotagerContext, DeletePlantContext } from "../../../../Utils/Context/potager";

function Potager() {
  // Context
  const { listPotager } = useContext(GetDataPotagerContext);
  const { deletePotager } = useContext(DeletePotagerContext);
  const { deletePlant } = useContext(DeletePlantContext);

  return (
    <section className="potager">
      <h2>Plan du potager</h2>
      <div className="potager_plan">
        {listPotager &&
          listPotager.map((list, index) => {
            if (list.size === 33) {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>
                    {list.name}
                    <span className="potager_size">
                      {" taille du carré : " + list.size}
                    </span>
                  </h3>
                  <div className="potager_carre carre33">
                    <FontAwesomeIcon
                      id="trashIcon"
                      icon={faXmark}
                      onClick={() => {
                        deletePotager(list.id);
                      }}
                    />
                    {list.plants.length !== 0 &&
                      list.plants.map((items, id) => {
                        const family = items.family;
                        if (items.family !== "") {
                          return (
                            <div key={id} className="plant_box">
                              <img
                                src={require(`../../../../assets/img/legume/${family}.jpg`)}
                                alt={items.family}
                              />
                              <FontAwesomeIcon
                                icon={faXmark}
                                onClick={() => {
                                  deletePlant(items.id);
                                }}
                              />
                            </div>
                          );
                        } else {
                          return <p key={id}></p>;
                        }
                      })}
                  </div>
                </div>
              );
            } else if (list.size === 25) {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>
                    {list.name}
                    <span className="potager_size">
                      {" taille du carré : " + list.size}
                    </span>
                  </h3>
                  <div className="potager_carre carre25">
                    <FontAwesomeIcon
                      id="trashIcon"
                      icon={faXmark}
                      onClick={() => {
                        deletePotager(list.id);
                      }}
                    />
                    {list.plants.map((items, id) => {
                      const family = items.family;
                      if (items.family !== "") {
                        return (
                          <div key={id} className="plant_box">
                            <img
                              src={require(`../../../../assets/img/legume/${family}.jpg`)}
                              alt={items.family}
                            />
                            <FontAwesomeIcon
                              icon={faXmark}
                              onClick={() => {
                                deletePlant(items.id);
                              }}
                            />
                          </div>
                        );
                      } else {
                        return <p key={id}></p>;
                      }
                    })}
                  </div>
                </div>
              );
            } else if (list.size === 24) {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>
                    {list.name}
                    <span className="potager_size">
                      {" taille du carré : " + list.size}
                    </span>
                  </h3>
                  <div className="potager_carre carre24">
                    <FontAwesomeIcon
                      id="trashIcon"
                      icon={faXmark}
                      onClick={() => {
                        deletePotager(list.id);
                      }}
                    />
                    {list.plants.map((items, id) => {
                      const family = items.family;
                      if (items.family !== "") {
                        return (
                          <div key={id} className="plant_box">
                            <img
                              src={require(`../../../../assets/img/legume/${family}.jpg`)}
                              alt={items.family}
                            />
                            <FontAwesomeIcon
                              icon={faXmark}
                              onClick={() => {
                                deletePlant(items.id);
                              }}
                            />
                          </div>
                        );
                      } else {
                        return <p key={id}></p>;
                      }
                    })}
                  </div>
                </div>
              );
            } else if (list.size === 35) {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>
                    {list.name}
                    <span className="potager_size">
                      {" taille du carré : " + list.size}
                    </span>
                  </h3>
                  <div className="potager_carre carre35">
                    <FontAwesomeIcon
                      id="trashIcon"
                      icon={faXmark}
                      onClick={() => {
                        deletePotager(list.id);
                      }}
                    />
                    {list.plants.map((items, id) => {
                      const family = items.family;
                      if (items.family !== "") {
                        return (
                          <div key={id} className="plant_box">
                            <img
                              src={require(`../../../../assets/img/legume/${family}.jpg`)}
                              alt={items.family}
                            />
                            <FontAwesomeIcon
                              icon={faXmark}
                              onClick={() => {
                                deletePlant(items.id);
                              }}
                            />
                          </div>
                        );
                      } else {
                        return <p key={id}></p>;
                      }
                    })}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>
                    {list.name}
                    <span className="potager_size">
                      {" taille du carré : " + list.size}
                    </span>
                  </h3>
                  <div className="potager_carre">
                    <FontAwesomeIcon
                      id="trashIcon"
                      icon={faXmark}
                      onClick={() => {
                        deletePotager(list.id);
                      }}
                    />
                    {list.plants.map((items, id) => {
                      const family = items.family;
                      if (items.family !== "") {
                        return (
                          <div key={id} className="plant_box">
                            <img
                              src={require(`../../../../assets/img/legume/${family}.jpg`)}
                              alt={items.family}
                            />
                            <FontAwesomeIcon
                              icon={faXmark}
                              onClick={() => {
                                deletePlant(items.id);
                              }}
                            />
                          </div>
                        );
                      } else {
                        return <p key={id}></p>;
                      }
                    })}
                  </div>
                </div>
              );
            }
          })}
      </div>
    </section>
  );
}

export default Potager;
