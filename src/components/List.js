import React from "react";
import {
    Grid,
    Image,
    Card,
    Button,
    Rating
} from "semantic-ui-react";
import noImage from "../assets/image.jpg"

const styles = {
    'width': '100%',
    'height': '225px',
};

const divStyles = {
    'width': '100%',
    'height': '80px',
}

const List = ({ course }) => {

    const handleMoreDetails = () => {
        window.open(`${course.url}`, '_blank')
    }

    return(
        <Grid.Column>
                <Card>
                {course.imgUrl ? 
                    <Image src={course.imgUrl} style={styles} />
                :
                    <Image src={noImage} style={styles} />
                }
                <div style={divStyles}>
                    <h4>{course.title}</h4>
                    {course.providerRatings ? 
                    <span>Rating:
                        <Rating
                        defaultRating={course.providerRatings}
                        maxRating={5}
                        disabled
                        icon="star"
                        size="mini"/></span>
                    :
                    <span>Not Rated</span>
                    }
                </div>
                <Card.Content extra>
                    <Button 
                        size='mini'
                        color='orange'
                        onClick={handleMoreDetails}
                        > More Details</Button>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default List