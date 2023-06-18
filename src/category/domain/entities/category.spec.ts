import { Category } from "./category";

describe("Category Unit Tests", () => {
  test("contructor of category", () => {
    // Arrange
    const props = {
      name: "Movie",
      is_active: true,
    }; 

    // Act
    const category: Category = new Category(props);

    // Assert
    expect(category.name).toBe("Movie");
    expect(category.description).toBe(null);
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBeInstanceOf(Date);
    expect(category.props).toStrictEqual(props);
    expect(category.props.created_at).toBe(category.created_at);
  });
});