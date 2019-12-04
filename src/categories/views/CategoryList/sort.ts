import {
  CategoryListUrlQueryParams,
  CategoryListUrlSortField
} from "@saleor/categories/urls";
import {
  CategorySortingInput,
  CategorySortField
} from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: CategoryListUrlSortField
): CategorySortField {
  switch (sort) {
    case CategoryListUrlSortField.name:
      return CategorySortField.NAME;
    case CategoryListUrlSortField.productCount:
      return CategorySortField.PRODUCT_COUNT;
    case CategoryListUrlSortField.subcategoryCount:
      return CategorySortField.SUBCATEGORY_COUNT;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: CategoryListUrlQueryParams
): CategorySortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
