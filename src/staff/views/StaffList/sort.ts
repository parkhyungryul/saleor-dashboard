import {
  StaffListUrlQueryParams,
  StaffListUrlSortField
} from "@saleor/staff/urls";
import { UserSortingInput, UserSortField } from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(sort: StaffListUrlSortField): UserSortField {
  switch (sort) {
    case StaffListUrlSortField.name:
      return UserSortField.LAST_NAME;
    case StaffListUrlSortField.email:
      return UserSortField.EMAIL;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: StaffListUrlQueryParams
): UserSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
