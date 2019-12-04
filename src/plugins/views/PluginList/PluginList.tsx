import { configurationMenuUrl } from "@saleor/configuration";
import useListSettings from "@saleor/hooks/useListSettings";
import useNavigator from "@saleor/hooks/useNavigator";
import usePaginator, {
  createPaginationState
} from "@saleor/hooks/usePaginator";
import { maybe } from "@saleor/misc";
import { ListViews } from "@saleor/types";
import React from "react";

import PluginsListPage from "../../components/PluginsListPage/PluginsListPage";
import { usePluginsListQuery } from "../../queries";
import { PluginListUrlQueryParams, pluginsUrl } from "../../urls";
import { getSortQueryVariables } from "./sort";

interface PluginsListProps {
  params: PluginListUrlQueryParams;
}

export const PluginsList: React.FC<PluginsListProps> = ({ params }) => {
  const navigate = useNavigator();
  const paginate = usePaginator();
  const { updateListSettings, settings } = useListSettings(
    ListViews.PLUGINS_LIST
  );

  const paginationState = createPaginationState(settings.rowNumber, params);
  const queryVariables = React.useMemo(
    () => ({
      ...paginationState,
      sort: getSortQueryVariables(params)
    }),
    [params]
  );
  const { data, loading } = usePluginsListQuery({
    displayLoader: true,
    variables: queryVariables
  });

  const { loadNextPage, loadPreviousPage, pageInfo } = paginate(
    maybe(() => data.plugins.pageInfo),
    paginationState,
    params
  );
  return (
    <>
      <PluginsListPage
        disabled={loading}
        settings={settings}
        plugins={maybe(() => data.plugins.edges.map(edge => edge.node))}
        pageInfo={pageInfo}
        onAdd={() => navigate(configurationMenuUrl)}
        onBack={() => navigate(configurationMenuUrl)}
        onNextPage={loadNextPage}
        onPreviousPage={loadPreviousPage}
        onUpdateListSettings={updateListSettings}
        onRowClick={id => () => navigate(pluginsUrl(id))}
      />
    </>
  );
};

export default PluginsList;
