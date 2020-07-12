import Link from 'next/link';
import Layout from '../components/Layout';
import {Cube} from '../components/3d/cube';
import {Line} from '../components/3d/line';
import Button from '@material-ui/core/Button/Button';

const IndexPage = () => {
    const [activeScript, setActiveScript] = useState(String)



    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h1>Hello Next.js 👋</h1>
            <p>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>
            <Button variant="contained" onClick={() => {Cube()}}>
                Cubo
            </Button>
            <Button variant="contained" color="primary" onClick={() => {Line()}}>
                Lineas
            </Button>
            <Button variant="contained" color="secondary" onClick={() => {Canvas()}}>
                Cuadricula?
            </Button>
        </Layout>
    )

}

export default IndexPage
