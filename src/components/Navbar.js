import React, {Component} from 'react';
import avatar from '../assets/images/dummy-avatar.jpg';


class Navbar extends Component {
	// constructor() {
	// 	super(this)
	// 	alert("chamou primeiro")
	// 	//const [notificacoes, setNotificacoes] = useState(0)
	// }

	state = {
		notificacoes: 0,
		mensagens: 0
	}


	alertaDeClick(event) {
		event.preventDefault()
		this.setState({notificacoes: this.state.notificacoes+1})
	}

	mensagens(event){
		event.preventDefault();
		this.setState({mensagens: this.state.mensagens + 1})
	}

	render() {
		return (
			<>
			{/* <!-- Topbar --> */}
					<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

						{/* <!-- Sidebar Toggle (Topbar) --> */}
						<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
							<i className="fa fa-bars"></i>
						</button>

						{/* <!-- Topbar Navbar --> */}
						<ul className="navbar-nav ml-auto">

							{/* <!-- Nav Item - Alerts --> */}
							<li className="nav-item dropdown no-arrow mx-1">
								<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown" onClick={(event) => this.alertaDeClick(event)}>
									<i className="fas fa-bell fa-fw"></i>
									{/* <!-- Counter - Alerts --> */}
									<span className="badge badge-danger badge-counter">{this.state.notificacoes}+</span>
								</a>
							</li>

							{/* <!-- Nav Item - Messages --> */}
							<li className="nav-item dropdown no-arrow mx-1">
								<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown" onClick={(event) => this.mensagens(event)}>
									<i className="fas fa-envelope fa-fw"></i>
									{/* <!-- Counter - Messages --> */}
									<span className="badge badge-danger badge-counter">{this.state.mensagens}</span>
								</a>
							</li>

							<div className="topbar-divider d-none d-sm-block"></div>

							{/* <!-- Nav Item - User Information --> */}
							<li className="nav-item dropdown no-arrow">
								<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
									<span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
									<img className="img-profile rounded-circle" src={avatar} width="60" alt="minha imagenm" />
								</a>
								{/* {opcoesMenu.map((opcaoMenu, indice) => (
									<a key={indice} href={opcaoMenu.link}>{opcaoMenu.opcao} - {indice}</a>
								))} */}
							</li>

						</ul>

					</nav>
					{/* <!-- End of Topbar --> */}
			</>
		)
	}
}


export default Navbar