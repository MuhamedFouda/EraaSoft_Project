import { useRecoilState } from 'recoil';
import { $Users } from '../../store';
import './index.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function LoginForm() {
	
	return (
		<div className="loginPage">
			<div class="container">
				<div class="screen">
					<div class="screen__content">
						<form class="login">
							<div class="login__field">
								<i class="login__icon fas fa-user"></i>
								<input type="text" class="login__input" placeholder="User name / Email" />
							</div>
							<div class="login__field">
								<i class="login__icon fas fa-lock"></i>
								<input type="password" class="login__input" placeholder="Password" />
							</div>
							<button class="button login__submit">
								<span class="button__text">Log In Now</span>
								<i class="button__icon fas fa-chevron-right"></i>
							</button>
						</form>
						<div class="social-login">
						<h3>log in via</h3>
                            {/* <div class="social-icons">
                                <Link className="social-login__icon"><FontAwesomeIcon icon={faInstagram} size="lg" /></Link>
                                <Link className="social-login__icon"><FontAwesomeIcon icon={faSquareFacebook} size="lg" style={{ color: "#fafafa", }} /></Link>
                                <Link className="social-login__icon"><FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#ffffff", }} /></Link>
                            </div> */}
						</div>
					</div>
					<div class="screen__background">
						<span class="screen__background__shape screen__background__shape4"></span>
						<span class="screen__background__shape screen__background__shape3"></span>
						<span class="screen__background__shape screen__background__shape2"></span>
						<span class="screen__background__shape screen__background__shape1"></span>
					</div>
				</div>
			</div>

		</div>
	)
}