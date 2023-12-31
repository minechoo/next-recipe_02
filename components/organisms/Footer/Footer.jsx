import { Title } from '@/components/atoms/text/Title';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import { Text } from '@/components/atoms/text/Text';
import { BounceLoader } from 'react-spinners';
import Btn from '@/components/atoms/Button/Btn';
import { useGlobalData } from '@/hooks/useGlobalContext';
import Category from '@/components/molecules/Category/Category';

function Footer() {
	const { setTheme, Theme } = useGlobalData();

	return (
		<footer className={clsx(styles.footer)}>
			<nav>
				<Category
					items={['theme1', 'theme2', 'theme3']}
					names={['Orange', 'Aqua', 'Hot pink']}
					active={Theme}
					onClick={setTheme}
				/>

				{/* {['Orange', 'Aqua', 'Hotpink'].map((el, idx) => (
					<Btn key={idx} onClick={() => setTheme(`theme${idx + 1}`)}>
						{el}
					</Btn>
				))} */}
				{/* 
				<Btn onClick={() => setTheme('theme1')}>Orange</Btn>
				<Btn onClick={() => setTheme('theme2')}>Aqua</Btn>
				<Btn onClick={() => setTheme('theme3')}>HotPink</Btn> 
				*/}
			</nav>
			<Text type={'util'} style={{ letterSpacing: 2 }}>
				2023 Decodelab All rights reserved.
			</Text>
		</footer>
	);
}

export default Footer;
