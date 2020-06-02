import styled from '@emotion/styled';
import {
	createShouldForwardProp,
	props,
} from '@styled-system/should-forward-prop';
import {
	background,
	border,
	color,
	flexbox,
	grid,
	layout,
	position,
	shadow,
	space,
	typography,
	compose,
} from 'styled-system';

export function Truncate(text) {
	if (text.isTruncated) {
		return {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		};
	}
}

export const systemProps = compose(
	layout,
	color,
	space,
	background,
	border,
	grid,
	position,
	shadow,
	typography,
	flexbox,
);

const shouldForwardProp = createShouldForwardProp([
	...props,
	'd',
	'textDecoration',
	'pointerEvents',
	'visibility',
	'transform',
	'cursor',
	'fill',
	'stroke',
]);

const nativeHTMLPropAlias = ['htmlWidth', 'htmlHeight'];

const Box = styled('div', {
	shouldForwardProp: (prop) => {
		if (nativeHTMLPropAlias.includes(prop)) {
			return true;
		}
		return shouldForwardProp(prop);
	},
})(Truncate, systemProps);

Box.displayName = 'Box';

export default Box;
