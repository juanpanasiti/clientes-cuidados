export const GET_ALL_CATEGORIES = `query GetAll{
    allCategories{
        id
        name
        color {
            hex
        }
    }
}`;
