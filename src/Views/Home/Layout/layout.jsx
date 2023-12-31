import React from "react";
import { Link } from "react-router-dom";

const layout = () => {
  return (
    <div>
      {" "}
      <ul className="breadcrumb">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="active">Dashboard</li>
      </ul>
      <div className="page-content-wrap">
        {/* START WIDGETS */}
        <div className="row">
          <div className="col-md-3">
            {/* START WIDGET SLIDER */}
            <div className="widget widget-default widget-carousel">
              <div className="owl-carousel" id="owl-example">
                <div>
                  <div className="widget-title">Nombre total de visiteurs</div>
                  <div className="widget-subtitle">27/11/2022 15:23</div>
                  <div className="widget-int">3,548</div>
                </div>
                <div>
                  <div className="widget-title">Retour</div>
                  <div className="widget-subtitle">Visiteurs</div>
                  <div className="widget-int">1,695</div>
                </div>
                <div>
                  <div className="widget-title">Nouveaux</div>
                  <div className="widget-subtitle">Visiteurs</div>
                  <div className="widget-int">1,977</div>
                </div>
              </div>
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
            </div>
            {/* END WIDGET SLIDER */}
          </div>
          <div className="col-md-3">
            {/* START WIDGET MESSAGES */}
            <Link to="/contact">
            <div
              className="widget widget-default widget-item-icon"
              onclick="location.href='pages-messages.html';">
                
              <div className="widget-item-left">
              
                 <span className="fa fa-envelope" /> 
                 
              </div>
             
              <div className="widget-data">
                <div className="widget-int num-count">48</div>
                <div className="widget-title">Nouveaux messages</div>
                <div className="widget-subtitle">Dans votre boîte aux lettres</div>
              </div>
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
            </div>
            </Link>
            {/* END WIDGET MESSAGES */}
          </div>
          <div className="col-md-3">
            {/* START WIDGET REGISTRED */}
            <div
              className="widget widget-default widget-item-icon"
              onclick="location.href='pages-address-book.html';"
            >
              <div className="widget-item-left">
                <span className="fa fa-user" />
              </div>
              <div className="widget-data">
                <div className="widget-int num-count">375</div>
                <div className="widget-title">Utilisateurs enregistrés</div>
                <div className="widget-subtitle">Dans votre site</div>
              </div>
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
            </div>
            {/* END WIDGET REGISTRED */}
          </div>
          <div className="col-md-3">
            {/* START WIDGET CLOCK */}
            <div className="widget widget-info widget-padding-sm">
              <div className="widget-big-int plugin-clock">00:00</div>
              <div className="widget-subtitle plugin-date">Chargement...</div>
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
              <div className="widget-buttons widget-c3">
                <div className="col">
                  <a href="#">
                    <span className="fa fa-clock-o" />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <span className="fa fa-bell" />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <span className="fa fa-calendar" />
                  </a>
                </div>
              </div>
            </div>
            {/* END WIDGET CLOCK */}
          </div>
        </div>
        {/* END WIDGETS */}
        <div className="row">
          <div className="col-md-4">
            {/* START USERS ACTIVITY BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Activité des utilisateurs</h3>
                  <span>Utilisateurs vs retour</span>
                </div>
                <ul className="panel-controls" style={{ marginTop: 2 }}>
                  <li>
                    <a href="#" className="panel-fullscreen">
                      <span className="fa fa-expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="panel-refresh">
                      <span className="fa fa-refresh" />
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span className="fa fa-cog" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#" className="panel-collapse">
                          <span className="fa fa-angle-down" /> S'effondrer
                        </a>
                      </li>
                      <li>
                        <a href="#" className="panel-remove">
                          <span className="fa fa-times" /> Retirer
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="panel-body padding-0">
                <div
                  className="chart-holder"
                  id="dashboard-bar-1"
                  style={{ height: 200 }}
                />
              </div>
            </div>
            {/* END USERS ACTIVITY BLOCK */}
          </div>
          <div className="col-md-4">
            {/* START VISITORS BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Visiteurs</h3>
                  <span>Visiteurs (le mois dernier)</span>
                </div>
                <ul className="panel-controls" style={{ marginTop: 2 }}>
                  <li>
                    <a href="#" className="panel-fullscreen">
                      <span className="fa fa-expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="panel-refresh">
                      <span className="fa fa-refresh" />
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span className="fa fa-cog" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#" className="panel-collapse">
                          <span className="fa fa-angle-down" /> S'effondrer
                        </a>
                      </li>
                      <li>
                        <a href="#" className="panel-remove">
                          <span className="fa fa-times" /> Retirer
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="panel-body padding-0">
                <div
                  className="chart-holder"
                  id="dashboard-donut-1"
                  style={{ height: 200 }}
                />
              </div>
            </div>
            {/* END VISITORS BLOCK */}
          </div>
          <div className="col-md-4">
            {/* START PROJECTS BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Projets</h3>
                  <span>Activité Projets</span>
                </div>
                <ul className="panel-controls" style={{ marginTop: 2 }}>
                  <li>
                    <a href="#" className="panel-fullscreen">
                      <span className="fa fa-expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="panel-refresh">
                      <span className="fa fa-refresh" />
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span className="fa fa-cog" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#" className="panel-collapse">
                          <span className="fa fa-angle-down" /> S'effondrer
                        </a>
                      </li>
                      <li>
                        <a href="#" className="panel-remove">
                          <span className="fa fa-times" /> Retirer
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="panel-body panel-body-table">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th width="50%">Projet</th>
                        <th width="20%">Statut</th>
                        <th width="30%">Activité</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Joli Admin</strong>
                        </td>
                        <td>
                          <span className="label label-danger">Developing</span>
                        </td>
                        <td>
                          <div className="progress progress-small progress-striped active">
                            <div
                              className="progress-bar progress-bar-danger"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "85%" }}
                            >
                              85%
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Gemini</strong>
                        </td>
                        <td>
                          <span className="label label-warning">Updating</span>
                        </td>
                        <td>
                          <div className="progress progress-small progress-striped active">
                            <div
                              className="progress-bar progress-bar-warning"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "40%" }}
                            >
                              40%
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Taurus</strong>
                        </td>
                        <td>
                          <span className="label label-warning">Updating</span>
                        </td>
                        <td>
                          <div className="progress progress-small progress-striped active">
                            <div
                              className="progress-bar progress-bar-warning"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "72%" }}
                            >
                              72%
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Leo</strong>
                        </td>
                        <td>
                          <span className="label label-success">Support</span>
                        </td>
                        <td>
                          <div className="progress progress-small progress-striped active">
                            <div
                              className="progress-bar progress-bar-success"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "100%" }}
                            >
                              100%
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Virgo</strong>
                        </td>
                        <td>
                          <span className="label label-success">Support</span>
                        </td>
                        <td>
                          <div className="progress progress-small progress-striped active">
                            <div
                              className="progress-bar progress-bar-success"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "100%" }}
                            >
                              100%
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* END PROJECTS BLOCK */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {/* START SALES BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Ventes</h3>
                  <span>Activité de vente par période que vous avez sélectionnée</span>
                </div>
                <ul className="panel-controls panel-controls-title">
                  <li>
                    <div id="reportrange" className="dtrange">
                      <span />
                      <b className="caret" />
                    </div>
                  </li>
                  <li>
                    <a href="#" className="panel-fullscreen rounded">
                      <span className="fa fa-expand" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="panel-body">
                <div className="row stacked">
                  <div className="col-md-4">
                    <div className="progress-list">
                      <div className="pull-left">
                        <strong>Dans la queue</strong>
                      </div>
                      <div className="pull-right">75%</div>
                      <div className="progress progress-small progress-striped active">
                        <div
                          className="progress-bar progress-bar-primary"
                          role="progressbar"
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "75%" }}
                        >
                          75%
                        </div>
                      </div>
                    </div>
                    <div className="progress-list">
                      <div className="pull-left">
                        <strong>Produits expédiés</strong>
                      </div>
                      <div className="pull-right">450/500</div>
                      <div className="progress progress-small progress-striped active">
                        <div
                          className="progress-bar progress-bar-primary"
                          role="progressbar"
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "90%" }}
                        >
                          90%
                        </div>
                      </div>
                    </div>
                    <div className="progress-list">
                      <div className="pull-left">
                        <strong className="text-danger">
                        Produits retournés
                        </strong>
                      </div>
                      <div className="pull-right">25/500</div>
                      <div className="progress progress-small progress-striped active">
                        <div
                          className="progress-bar progress-bar-danger"
                          role="progressbar"
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "5%" }}
                        >
                          5%
                        </div>
                      </div>
                    </div>
                    <div className="progress-list">
                      <div className="pull-left">
                        <strong className="text-warning">Progrès aujourd'hui</strong>
                      </div>
                      <div className="pull-right">75/150</div>
                      <div className="progress progress-small progress-striped active">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "50%" }}
                        >
                          50%
                        </div>
                      </div>
                    </div>
                    <p>
                      <span className="fa fa-warning" /> Mise à jour des données à la fin de chaque heure. 
                      Vous pouvez le mettre à jour manuellement en appuyant sur le bouton de mise à jour
                    </p>
                  </div>
                  <div className="col-md-8">
                    <div
                      id="dashboard-map-seles"
                      style={{ width: "100%", height: 200 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* END SALES BLOCK */}
          </div>
          <div
            className="common-modal modal fade"
            id="common-Modal1"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-content">
              <ul className="list-inline item-details">
                <li>
                  <a href="http://themifycloud.com/downloads/janux-premium-responsive-bootstrap-admin-dashboard-template/">
                  Modèles d'administration
                  </a>
                </li>
                <li>
                  <a href="http://themescloud.org">Bootstrap themes</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            {/* START SALES & EVENTS BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Ventes &amp; Événement</h3>
                  <span>Événement "Bouton d'achat"</span>
                </div>
                <ul className="panel-controls" style={{ marginTop: 2 }}>
                  <li>
                    <a href="#" className="panel-fullscreen">
                      <span className="fa fa-expand" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="panel-refresh">
                      <span className="fa fa-refresh" />
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span className="fa fa-cog" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#" className="panel-collapse">
                          <span className="fa fa-angle-down" /> S'effondrer
                        </a>
                      </li>
                      <li>
                        <a href="#" className="panel-remove">
                          <span className="fa fa-times" /> Retirer
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="panel-body padding-0">
                <div
                  className="chart-holder"
                  id="dashboard-line-1"
                  style={{ height: 200 }}
                />
              </div>
            </div>
            {/* END SALES & EVENTS BLOCK */}
          </div>
        </div>
        {/* START DASHBOARD CHART */}
        <div
          className="chart-holder"
          id="dashboard-area-1"
          style={{ height: 200 }}
        />
        <div className="block-full-width"></div>
        {/* END DASHBOARD CHART */}
      </div>
    </div>
  );
};

export default layout;