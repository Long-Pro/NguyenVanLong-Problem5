export const handlePaginationParams = (page = 1, size = 10) => {
  return {
    take: size,
    skip: (page - 1) * size,
  };
};
