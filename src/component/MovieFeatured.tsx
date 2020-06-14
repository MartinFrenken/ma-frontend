import { Card } from 'antd';
import Movie from "../model/Movie";

const { Meta } = Card;

export default function MovieFeatured(props:{movie:Movie}) {

    return  <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={props.movie.images[0]} />}
        >
        <Meta title={props.movie.identifier} description={props.movie.description} />
        </Card>

}