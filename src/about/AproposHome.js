import "./apropos-home.scss";
import LinkGeneric from "../utils/linkgeneric/LinkGeneric";

function AproposHome() {
	return (
		<div className="about-home-wrapper">
			<h2 className="about-home-title">Bienvenue sur mon site !</h2>
			<div className="about-home-row-wrapper">
				<div className="about-home-subwrapper">
					<h3 className="about-home-subtitle">Présentation du voyage</h3>
					<p className="about-home-text about-home-text--mod1">
						J'ai passé une année à la Réunion, d'octobre 2023 à octobre 2024. Je
						vous propose de découvrir en images et avec quelques textes mon
						expérience là bas. Vous y trouverez des paysages, des animaux croisés
						lors de balades.
					</p>
					<img className="about-home-square-img" src='https://i.postimg.cc/x83MZQMN/homepage-saint-joseph.jpg' 
					alt='paysage de la rivière Langevin'/>
				</div>
				<div className="about-home-subwrapper">
					<h3 className="about-home-subtitle">Situation géographique de la Réunion</h3>
					<p className="about-home-text about-home-text--mod2">
						La Réunion est une île de l'océan Indien, dans l'hémisphère sud, située
						à l'est de Madagascar et faisant partie de l'archipel des Mascareignes,
						avec l'île Maurice et l'île Rodriges. Elle est située à 9000 kilomètres
						de Paris.
					</p>
					<img className="about-home-square-img" src='https://i.postimg.cc/sXpn4vfp/image-about2.jpg' 
					alt='paysage de la ville de Cilaos'/>
				</div>
			</div>
			<br />
	
			<h3 className="about-home-subtitle">A quoi ça ressemble ? </h3>
			<p className="about-home-text about-home-text--mod3">
				La Réunion est une île volcanique, dont le sommet, le piton des Neiges,
				grimpe à 3070 mètres d'altitude, le plus haut sommet de l'océan indien.
				On y trouve un volcan toujours en activité, le piton de la Fournaise. Si
				le climat est globalement tropical avec une saison des pluies (été
				austral) et une saison sèche plus fraiche (hiver austral), il existe une
				grande variété de micro climats en raison des reliefs de l'île. Ainsi
				quand il fait 30 degrés à Saint Pierre, il peut très bien faire 17
				degrés à la plaine des Cafres et 8 degrés au piton des Neiges !
			</p>
			
			<div className="about-home-row-wrapper-images">
			<img className="about-home-3-img" src='https://i.postimg.cc/s21ysTt0/saint-pierre.jpg' 
			alt='paysage Saint-Pierre avec un arc en ciel sur la mer'/>
			<img className="about-home-3-img" src='https://i.postimg.cc/YCdk55yW/plantes.jpg' 
			alt='plantes du mascarin jartin botanique'/>
			<img className="about-home-3-img" src='https://i.postimg.cc/1zz6PZRh/20240407-104537.jpg' 
			alt='vue des montagnes'/>
			</div>		
	
			<p className="about-home-text about-home-text--mod4">
				Retrouvez sous cette présentation des posts avec des textes et des images de mon voyage. 
				Allez en page activités pour réaliser un quiz spécial ✨
				Bonne balade ! 
			</p>
			
			<p className="about-home-text about-home-text--mod5">
				Ce site est entièrement codé par mes soins (front, back, base de données
				et API), et vous pouvez retrouver le projet sur mon{" "}
				<LinkGeneric adress="https://github.com/vio9" text="profil Github" color="#37BFFA"/>.
				Pour plus d'infos c'est par{" "}
				<LinkGeneric
					adress="https://skyblag-sage.vercel.app/apropos"
					text="ici"
					color="#37BFFA"
				/>
			</p>

		</div>
	);
}

export default AproposHome;
