import gql from 'graphql-tag';

export const GAME_DETAILS = gql`query game($uuid: UUID) {
    game(uuid: $uuid) {
        uuid
        description
        capacity
        name
        start_time
        end_time
        status
        organizer {
            uuid
            first_name
            last_name
        }
        attendees {
            uuid
            created_at
            status
            user {
                uuid
                first_name
                last_name
            }
        }
        spot {
            uuid
            name
            images {
                uuid
                image
            }
            address {
                uuid
                lat
                lng
            }
        }
        sport {
            uuid,
            name
        }
    }
}`