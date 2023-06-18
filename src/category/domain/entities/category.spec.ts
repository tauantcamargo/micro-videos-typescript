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

  test("getter of name field", () => {
    // Arrange
    const props = {
      name: "Movie",
      is_active: true,
    }; 

    // Act
    const category: Category = new Category(props);

    // Assert
    expect(category.name).toBe("Movie");
  });

  test("getter and setter of descripition field", () => {
    // Arrange
    const props = {
      name: "Movie",
      description: "Movies category",
      is_active: true,
    }; 

    // Act
    const category: Category = new Category(props);

    // Assert
    expect(category.description).toBe("Movies category");
  });

  test("getter and setter of descripition field should be null", () => {
    // Arrange
    const props = {
      name: "Movie",
      is_active: true,
    }; 

    // Act
    const category: Category = new Category(props);

    // Assert
    expect(category.description).toBeNull();
  });

  test("getter and setter of is_active field", () => {
    // Arrange
    const props = {
      name: "Movie",
      is_active: true,
    }; 

    // Act
    const category: Category = new Category(props);

    // Assert
    expect(category.is_active).toBeTruthy();
  });

  test("getter and setter of is_active field should be true", () => {
    // Arrange
    const props = {
      name: "Movie",
    }; 

    // Act
    const category: Category = new Category(props);

    // Assert
    expect(category.is_active).toBeTruthy();
  });

  test("getter and setter of created_at field", () => {
    // Arrange
    const props = {
      name: "Movie",
      is_active: true,
      created_at: new Date(),
    }; 

    // Act
    const category: Category = new Category(props);

    // Assert
    expect(category.created_at).toBeInstanceOf(Date);
  });

  test("getter and setter of created_at field should be instance of Date", () => {
    // Arrange
    const props = {
      name: "Movie",
      is_active: true,
    }; 

    // Act
    const category: Category = new Category(props);

    // Assert
    expect(category.created_at).toBeInstanceOf(Date);
  });
});