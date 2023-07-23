import React from 'react'
import LoginService from '../../../services/LoginService'
import Logout from '../../Logout/Logout'

const index = () => {

  return (
    <div>
             {/* SEARCH */}
             <li className="xn-search">
       <form role="form">
         <input type="text" name="search" placeholder="Recherchez..." />
       </form>
     </li>
    
     {/* END SEARCH */}
       {/* SIGN OUT */}
       <Logout/>
       {/* <li className="xn-icon-button pull-right">
       <a href="#" className="mb-control" data-box="#mb-signout" ><span className="fa fa-sign-out" /></a>                        
     </li> */}
       {/* <li className="xn-icon-button pull-right">
       <a href="#" className="mb-control" data-box="#mb-signout" ><span className="fa fa-sign-out" /></a>                        
     </li>  */}
     {/* END SIGN OUT */}
     {/* MESSAGES */}
     <li className="xn-icon-button pull-right">
       <a href="#"><span className="fa fa-comments" /></a>
       <div className="informer informer-danger">4</div>
       <div className="panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging">
         <div className="panel-heading">
           <h3 className="panel-title"><span className="fa fa-comments" /> Messages</h3>                                
           <div className="pull-right">
             <span className="label label-danger">4 nouveaux</span>
           </div>
         </div>
         <div className="panel-body list-group list-group-contacts scroll" style={{height: 200}}>
           <a href="#" className="list-group-item">
             <div className="list-group-status status-online" />
             <img src="assets/images/users/user2.jpg" className="pull-left" alt="John Doe" />
             <span className="contacts-title">Souhir </span>
             <p>Ma montre ne fonctionne pas encore</p>
           </a>
           <a href="#" className="list-group-item">
             <div className="list-group-status status-away" />
             <img src="assets/images/users/user.jpg" className="pull-left" alt="Dmitry Ivaniuk" />
             <span className="contacts-title">Mohammed</span>
             <p>Combien coûte ce bracelet</p>
           </a>
           <a href="#" className="list-group-item">
             <div className="list-group-status status-away" />
             <img src="assets/images/users/user3.jpg" className="pull-left" alt="Nadia Ali" />
             <span className="contacts-title">Nadia Ali</span>
             <p>Je veux regarder tous vos articles</p>
           </a>
           <a href="#" className="list-group-item">
             <div className="list-group-status status-offline" />
             <img src="assets/images/users/user6.jpg" className="pull-left" alt="Darth Vader" />
             <span className="contacts-title">Ahlem </span>
             <p>je veux qu'on me rende mon argent!</p>
           </a>
         </div>     
         <div className="panel-footer text-center">
           <a href="pages-messages.html">Afficher tous les messages</a>
         </div>                            
       </div>                        
     </li>
     {/* END MESSAGES */}
     {/* TASKS */}
     <li className="xn-icon-button pull-right">
       <a href="#"><span className="fa fa-tasks" /></a>
       <div className="informer informer-warning">3</div>
       <div className="panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging">
         <div className="panel-heading">
           <h3 className="panel-title"><span className="fa fa-tasks" /> Tâches</h3>                                
           <div className="pull-right">
             <span className="label label-warning">3 active</span>
           </div>
         </div>
         <div className="panel-body list-group scroll" style={{height: 200}}>                                
           <a className="list-group-item" href="#">
             <strong>Phasellus augue arcu, elementum</strong>
             <div className="progress progress-small progress-striped active">
               <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>50%</div>
             </div>
             <small className="text-muted">Souhir, 25 Sep 2022 / 50%</small>
           </a>
           <a className="list-group-item" href="#">
             <strong>Aenean ac cursus</strong>
             <div className="progress progress-small progress-striped active">
               <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>80%</div>
             </div>
             <small className="text-muted">Mohammed, 24 Sep 2022 / 80%</small>
           </a>
           <a className="list-group-item" href="#">
             <strong>Lorem ipsum dolor</strong>
             <div className="progress progress-small progress-striped active">
               <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}>95%</div>
             </div>
             <small className="text-muted">Amir, 23 Sep 2022 / 95%</small>
           </a>
           <a className="list-group-item" href="#">
             <strong>Cras suscipit ac quam at tincidunt.</strong>
             <div className="progress progress-small">
               <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>100%</div>
             </div>
             <small className="text-muted">Ahlem, 21 Sep 2022 /</small><small className="text-success"> Terminé</small>
           </a>                                
         </div>     
         <div className="panel-footer text-center">
           <a href="pages-tasks.html">Voir tous les tâches</a>
         </div>                            
       </div>                        
     </li>
     {/* END TASKS */}
    </div>
  )
}

export default index