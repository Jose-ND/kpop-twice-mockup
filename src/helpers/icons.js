import {
	faFacebookF,
	faEbay,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import {
	faBars,
	faSignOutAlt,
	faEdit,
	faTimes,
	faShoppingBag,
	faPhone,
	faEnvelope,
	faMapMarkedAlt,
	faSearch,
	faUser,
	faHandPeace,
	faTimesCircle,
	faPlus,
	faMinus
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
	return library.add(
		faBars,
		faSignOutAlt,
		faEdit,
		faFacebookF,
		faEbay,
		faInstagram,
		faTwitter,
		faTimes,
		faShoppingBag,
		faPhone,
		faEnvelope,
		faMapMarkedAlt,
		faSearch,
		faUser,
		faHandPeace,
		faTimesCircle,
		faPlus,
		faMinus
	);
};

export default Icons;
