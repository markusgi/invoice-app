import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	@media (min-width: 576px) {
		.container {
			max-width: 540px;
		}
	}
	@media (min-width: 768px) {
		.container {
			max-width: 720px;
		}
	}
	@media (min-width: 992px) {
		.container {
			max-width: 960px;
		}
	}
	@media (min-width: 1200px) {
		.container {
			max-width: 1140px;
		}
	}

	${props => {
		if (props.bestRated) {
			return `
			width: 90%;
			margin: 50px auto;
			display: flex;
			justify-content: center;
			flex-wrap: wrap; 
			`;
		}
	}}

	${props => {
		if (props.Search) {
			return `
			width: 90%;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			justify-content: center;
			flex-wrap: wrap;
			`;
		}
	}}
	
	${props => {
		if (props.restaurantProfile) {
			return `
			width: 90%;
			margin: 0 auto;
			.reviews-info {
				margin: 20px 0;
				width: 100%;
				display: flex;
				flex-direction: row;
				text-align: center;
			}
			.reviews-profile-page {
				width: 50%;
			}
			.filter-section {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			
			.info-profile-page {
				width: 50%;
			}
			`;
		}
	}}

	${props => {
		if (props.userProfile) {
			return `
			width: 90%;
			margin: 0 auto;
			.user-profile-content {
				width: 100%;
				display: flex;
				flex-direction: row;
				text-align: center;
				/* min-height: 700px; */
			}


			.active {
				border-left: 3px solid ${props.theme.orangeMain};
				color: ${props => props.theme.linkActive};
			}

			/* left side */
			.user-menu {
				background: #fff;
				width: 20%;
				position: relative;
				top: -130px;
				z-index: 1;
				.avatar {
					width: 100%;
				}
			}

			.user-details-left {
				width: 100%;
				text-align: left;
				img {
					width: 100%;
					height: 40%;
				}
				h3 {
					padding: 20px 10px;
				}
			}

			.menu-option {
				padding: 12px 20px;
				display: flex;
				flex-direction: row;
				align-items: center;
				cursor: pointer;
				font-size: ${props.theme.fontNormal};
				border-bottom: 1px solid rgb(0,0,0,.45);
				img{
					width: 25px;
				}
				p {
					margin-left: 15px;
				}
			}

			.menu-option:nth-child(1){
				border-top: 1px solid rgb(0,0,0,.45);
			}

			/* main content */
			.user-content {
				width: 50%;
				text-align: left;
			}

			/* right-side */
			.user-info {
				width: 30%;
				padding: 12px 15px;
				text-align: left;
				
				div:nth-child(2){
					padding-top: 30px;
				}

				div {
					padding: 12px 10px;
				}

				div p {
					margin: 12px 0;
				}
			} 
		`;
		}
	}}
`;
