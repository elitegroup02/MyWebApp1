import Link from 'next/link';
import Layout from '../components/Layout';
import {Cube} from '../components/3d/cube';
import { Lines } from '../components/3d/lines';
import { Flag } from '../components/3d/flag';
import Button from '@material-ui/core/Button/Button';

const IndexPage = () => {

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
            <Button variant="contained" color="primary" onClick={() => {Lines()}}>
                Lineas
            </Button>
            <Button variant="contained" color="secondary" onClick={() => {Flag()}}>
                Bandera de la padpadasches!
            </Button>
        </Layout>
    )

}

export default IndexPage
