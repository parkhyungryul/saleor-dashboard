import {
  PluginListUrlQueryParams,
  PluginListUrlSortField
} from "@saleor/plugins/urls";
import { PluginSortingInput, PluginSortField } from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: PluginListUrlSortField
): PluginSortField {
  switch (sort) {
    case PluginListUrlSortField.name:
      return PluginSortField.NAME;
    case PluginListUrlSortField.active:
      return PluginSortField.IS_ACTIVE;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: PluginListUrlQueryParams
): PluginSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
