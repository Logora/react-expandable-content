import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowDownIcon from "./icons/ArrowDownIcon.svg";

const Container = styled.div`
    position: relative;
`;

const ContentBody = styled.div`
	${props => {
		if (props.showExpandText) return `
			max-height: ${props.maxHeight}px;
			overflow: hidden;
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
		`
    }}
	
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    &:hover {
        cursor: pointer;
        color: black;
    };
`;

const Link = styled.div`
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 10;
	margin: 0.5em;
    padding: 0 0.5em;
	svg {
		transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0)'};
	}
`;

const ExpandableContent = ({ children, expandable = true, expandText = "Read more", collapseText = "Read less", className, maxHeight = "100", showIcon = true, onCollapse = () => {}, onExpand = () => {}}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [contentHeight, setContentHeight] = useState(0);
	const contentRef = useRef(null);

	useEffect(() => {
		if(expandable) {
			setContentHeight(getContentHeight());
		}
	}, []);

	const getContentHeight = () => {
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
            <ContentBody maxHeight={maxHeight} showExpandText={expandable && !isExpanded && contentHeight > maxHeight}>
                { children }
            </ContentBody>
			{ expandable && contentHeight > maxHeight && (
				( !isExpanded ?
					<LinkContainer onClick={() => handleExpand()}>
						<Link className={className}>
							{ showIcon && <ArrowDownIcon height={16} width={16} /> }
							<span>{expandText}</span>
						</Link>
					</LinkContainer> 
					:
					<LinkContainer onClick={() => handleCollapse() }>
						<Link className={className} expanded={true}>
							{ showIcon && <ArrowDownIcon height={16} width={16} /> }
							<span>{collapseText}</span>
						</Link>
					</LinkContainer>
				)
			)}
        </Container>
    )
}

export default ExpandableContent;

ExpandableContent.propTypes = {
	children: PropTypes.any,
	expandable: PropTypes.bool,
	isExpanded: PropTypes.bool,
	expandText: PropTypes.string,
	collapseText: PropTypes.string,
	className: PropTypes.string,
	maxHeight: PropTypes.number,
	showIcon: PropTypes.bool,
	onCollapse: PropTypes.func,
	onExpand: PropTypes.func,
};