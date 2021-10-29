import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowDownIcon from "./icons/ArrowDownIcon.svg";
import { NoEmitOnErrorsPlugin } from 'webpack';


// TODO : Ajouter les callback functions
// TODO : Rendre le contenu refermable
// TODO : Passer du texte
// TODO : Passer une className
// TODO : Styliser avec styled-components
// TODO : Ré-usiner le composant
// TODO : Ajouter les propTypes
// TODO : Importer l'icône

const Container = styled.div`
    position: relative;
`;

// ${props => props.maxHeightPx ? 
// 	max-height: {maxHeight}px;
// : props.maxHeightEm ?
// 	max-height: {maxHeight}em;
// };

const ContentBody = styled.div`
    overflow: hidden;
	${props => {
        if (props.maxHeightPx) return `
            max-height: ${maxHeight}px;
        `
		if (props.maxHeightEm) return `
            max-height: ${maxHeight}em;
        `
    }}
    &:after {
        content: "";
		position: absolute;
		z-index: 1;
		bottom: 0;
		left: 0;
		right: 0;
		pointer-events: none;
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 90%);
		width: 100%;
		height: 5em;
    }
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    &:hover {
        cursor: pointer;
        color: black;
    }
`;

const Link = styled.div`
    color: black;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 10;
    padding: 0 0.5em;
`;

// TODO : Passer la taille en em ou en pixels

const ExpandableContent = ({ children, collapseText, expandText, onCollapse, onExpand, className, maxHeightPx, maxHeightEm }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [contentHeight, setContentHeight] = useState(0);
	const contentRef = useRef(null);

	useEffect(() => {
		setContentHeight(getContentHeight());
	}, []);

	const getContentHeight = () => {
		// GET CONTENT HEIGHT IN PX
		const heightPx = contentRef.current.clientHeight;
		return Math.round(heightPx);
	};

	const handleCollapse = () => {
		setIsExpanded(false);
		onCollapse();
	}

	const handleExpand = () => {
		setIsExpanded(true);
		onExpand();
	}

    return (
        <Container ref={contentRef}>
            <ContentBody maxHeightPx={maxHeightPx && maxHeightPx} maxHeightEm={maxHeightEm && maxHeightEm}>
                { children }
            </ContentBody>
            { isExpanded ? (
				<LinkContainer onClick={() => handleCollapse() }>
					<Link className={className}>
						<ArrowDownIcon height={16} width={16} />
						<p>{collapseText}</p>
					</Link>
				</LinkContainer>
            ) : contentHeight > maxHeight ? (
              	<LinkContainer onClick={() => handleExpand()}>
					<Link className={className}>
						<ArrowDownIcon height={16} width={16} />
						<p>{expandText}</p>
					</Link>
				</LinkContainer>
            ) 
			: null }
        </Container>
    )
}

export default ExpandableContent;

ExpandableContent.propTypes = {
	children: PropTypes.any,
	isExpanded: PropTypes.bool,
	collapseText: PropTypes.string,
	expandText: PropTypes.string,
	onCollapse: PropTypes.func,
	onExpand: PropTypes.func,
	className: PropTypes.string,
	maxHeightPx: PropTypes.number,
	maxHeightEm: PropTypes.number
};