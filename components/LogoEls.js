import React from 'react'
import { Flex, Text } from 'rebass'

export const Base = props => {
	return (
		<Flex
			sx={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				top: 0,
				left: 0,
			}}
		>
			<svg
				width="216"
				height="216"
				viewBox="0 0 216 216"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M162.331 59.7218C163.868 59.5751 165.425 59.5 167 59.5C193.786 59.5 215.5 81.2142 215.5 108C215.5 134.786 193.786 156.5 167 156.5C165.425 156.5 163.868 156.425 162.331 156.278C158.959 155.956 155.956 158.959 156.278 162.331C156.425 163.868 156.5 165.425 156.5 167C156.5 193.786 134.786 215.5 108 215.5C81.2142 215.5 59.5 193.786 59.5 167C59.5 165.425 59.5751 163.868 59.7218 162.331C60.0438 158.959 57.0405 155.956 53.6687 156.278C52.1324 156.425 50.575 156.5 49 156.5C22.2142 156.5 0.5 134.786 0.5 108C0.5 81.2142 22.2142 59.5 49 59.5C50.5751 59.5 52.1324 59.5751 53.6688 59.7218C57.0405 60.0438 60.0438 57.0405 59.7218 53.6688C59.5751 52.1324 59.5 50.5751 59.5 49C59.5 22.2142 81.2142 0.5 108 0.5C134.786 0.5 156.5 22.2142 156.5 49C156.5 50.5751 156.425 52.1324 156.278 53.6688C155.956 57.0405 158.959 60.0438 162.331 59.7218ZM112.669 97.2782C111.132 97.4249 109.575 97.5 108 97.5C106.425 97.5 104.868 97.4249 103.331 97.2782C99.9595 96.9562 96.9562 99.9595 97.2782 103.331C97.4249 104.868 97.5 106.425 97.5 108C97.5 109.575 97.4249 111.132 97.2782 112.669C96.9562 116.041 99.9595 119.044 103.331 118.722C104.868 118.575 106.425 118.5 108 118.5C109.575 118.5 111.132 118.575 112.669 118.722C116.041 119.044 119.044 116.041 118.722 112.669C118.575 111.132 118.5 109.575 118.5 108C118.5 106.425 118.575 104.868 118.722 103.331C119.044 99.9595 116.041 96.9562 112.669 97.2782Z"
					stroke="#FB4926"
				/>
			</svg>
		</Flex>
	)
}

export const TopRight = props => {
	return (
		<Flex
			sx={{
				width: '100%',
				height: '100%',
				top: 0,
				left: 0,
			}}
			{...props}
		>
			<svg
				width="216"
				height="216"
				viewBox="0 0 216 216"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M167 59C194.062 59 216 80.938 216 108C216 135.062 194.062 157 167 157C139.938 157 118 135.062 118 108C118 106.409 118.076 104.836 118.224 103.284C118.516 100.225 115.775 97.4838 112.716 97.776C111.164 97.9242 109.591 98 108 98C80.9381 98 59 76.062 59 49C59 21.938 80.938 0 108 0C135.062 0 157 21.938 157 49C157 50.5909 156.924 52.1642 156.776 53.7163C156.484 56.7754 159.225 59.5162 162.284 59.224C163.836 59.0758 165.409 59 167 59Z"
					fill="#FB4926"
				/>
			</svg>
		</Flex>
	)
}

export const RightBottom = props => {
	return (
		<Flex
			sx={{
				width: '100%',
				height: '100%',
				top: 0,
				left: 0,
			}}
			{...props}
		>
			<svg
				width="216"
				height="216"
				viewBox="0 0 216 216"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M162.284 156.776C159.225 156.484 156.484 159.225 156.776 162.284C156.924 163.836 157 165.409 157 167C157 194.062 135.062 216 108 216C80.938 216 59 194.062 59 167C59 139.938 80.938 118 108 118C109.591 118 111.164 118.076 112.716 118.224C115.775 118.516 118.516 115.775 118.224 112.716C118.076 111.164 118 109.591 118 108C118 80.938 139.938 59 167 59C194.062 59 216 80.938 216 108C216 135.062 194.062 157 167 157C165.409 157 163.836 156.924 162.284 156.776Z"
					fill="#FB4926"
				/>
			</svg>
		</Flex>
	)
}

export const BottomLeft = props => {
	return (
		<Flex
			sx={{
				width: '100%',
				height: '100%',
				top: 0,
				left: 0,
			}}
			{...props}
		>
			<svg
				width="216"
				height="216"
				viewBox="0 0 216 216"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M108 118C135.062 118 157 139.938 157 167C157 194.062 135.062 216 108 216C80.938 216 59 194.062 59 167C59 165.409 59.0758 163.836 59.224 162.284C59.5162 159.225 56.7754 156.484 53.7163 156.776C52.1642 156.924 50.5909 157 49 157C21.938 157 0 135.062 0 108C0 80.938 21.938 59 49 59C76.062 59 98 80.938 98 108C98 109.591 97.9242 111.164 97.776 112.716C97.4838 115.775 100.225 118.516 103.284 118.224C104.836 118.076 106.409 118 108 118Z"
					fill="#FB4926"
				/>
			</svg>
		</Flex>
	)
}

export const TopLeft = props => {
	return (
		<Flex
			sx={{
				width: '100%',
				height: '100%',
				top: 0,
				left: 0,
			}}
			{...props}
		>
			<svg
				width="216"
				height="216"
				viewBox="0 0 216 216"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M103.284 97.776C100.225 97.4838 97.4838 100.225 97.776 103.284C97.9242 104.836 98 106.409 98 108C98 135.062 76.062 157 49 157C21.938 157 0 135.062 0 108C0 80.938 21.938 59 49 59C50.5909 59 52.1642 59.0758 53.7163 59.224C56.7754 59.5162 59.5162 56.7754 59.224 53.7163C59.0758 52.1642 59 50.5909 59 49C59 21.938 80.938 0 108 0C135.062 0 157 21.938 157 49C157 76.062 135.062 98 108 98C106.409 98 104.836 97.9242 103.284 97.776Z"
					fill="#FB4926"
				/>
			</svg>
		</Flex>
	)
}
