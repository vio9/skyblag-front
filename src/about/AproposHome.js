import "./apropos-home.scss";
import LinkGeneric from "../utils/linkgeneric/LinkGeneric";

function AproposHome() {
	return (
		<div className="about-home-wrapper">
			<h2 className="about-home-title">Bienvenue sur mon site !</h2>
			<p className="about-home-text">
				J'ai passé une année à la Réunion, d'octobre 2023 à octobre 2024. Je
				vous propose de découvrir en images et avec quelques textes mon
				expérience là bas. Vous y trouverez des paysages, des animaux croisés
				lors de balades, du street art...
			</p>
			<h3 className="about-home-subtitle">Situation géographique</h3>
			<p className="about-home-text">
				La Réunion est une île de l'océan Indien, dans l'hémisphère sud, située
				à l'est de Madagascar et faisant partie de l'archipel des Mascareignes,
				avec l'île Maurice et l'île Rodriges. Elle est située à 9000 kilomètres
				de Paris.
			</p>
			<br />
			<h3 className="about-home-subtitle">A quoi ça ressemble ? </h3>
			<p className="about-home-text">
				La Réunion est une île volcanique, dont le sommet, le piton des Neiges,
				grimpe à 3070 mètres d'altitude, le plus haut sommet de l'océan indien.
				On y trouve un volcan toujours en activité, le piton de la Fournaise. Si
				le climat est globalement tropical avec une saison des pluies (été
				austral) et une saison sèche plus fraiche (hiver austral), il existe une
				grande variété de micro climats en raison des reliefs de l'île. Ainsi
				quand il fait 30 degrés à Saint Pierre, il peut très bien faire 17
				degrés à la plaine des Cafres et 8 degrés au piton des Neiges !
			</p>
			<br />
			<h3 className="about-home-subtitle">Une société multiculturelle</h3>
			<p className="about-home-text">
				L'île compte plus de 850000 habitants, et de part son histoire, est une
				société multi culturelle unique. On y trouve des communautés
				originaires de Chine, d'Inde, d'Afrique, de Madagascar, de métropole.</p>
				<p>Pour plus d'informations avec des sources :
				<ul className="about-home-ul">
					<li className="about-home-ul-li">
						<LinkGeneric
							text="Petite présentation de la population réunionnaise"
							address="https://www.reunion.fr/decouvrez/la-population-reunionnaise/"
						color="rgb(171, 61, 202)"
						/>
					</li>
					<li className="about-home-ul-li">
						<LinkGeneric
							text="Des portraits de réunionnaises et de réunionnais"
							address="https://www.reunion.fr/decouvrez/la-population-reunionnaise/les-portraits-des-reunionnais/"
							color="rgb(171, 61, 202)"
							/>
					</li>
				</ul>
			</p>
			<p className="about-home-text">
				Allez en page activités pour réaliser un quiz spécial ✨
			</p>
			<p className="about-home-text">
				Ce site est entièrement codé par mes soins (front, back, base de données
				et API), et vous pouvez retrouver le projet sur mon{" "}
				<LinkGeneric adress="https://github.com/vio9" text="profil Github" />.
			</p>
			<p className="about-home-text">
				Pour plus d'infos c'est par{" "}
				<LinkGeneric
					adress="https://skyblag-sage.vercel.app/apropos"
					text="ici"
				/>
			</p>
			<div className="about-home-wrap-img">
				<img
					className="about-home-img"
					src="https://i.postimg.cc/tRscCsPm/coucher-soleil-ocean.jpg"
				/>
			</div>
		</div>
	);
}

export default AproposHome;
