import { TableProvider as Table } from "@/components/Table/TableProvider";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const defaultOptions = {
    displayNewRecord: true,
    newRecordLabel: null,
    displayTableRecord: true,
    actions: null,
};

export function TableLayout({
    onAdd,
    onUpdate,
    canView,
    hideAllRowsActions,
    hideRowActions,
    hiddenActionsContent,
    layoutOptions,
    ...tableProps
}) {
    const [parent] = useAutoAnimate({ duration: 300 });
    const { displayTableRecord, displayNewRecord, newRecordLabel, actions } = {
        ...defaultOptions,
        ...(layoutOptions && layoutOptions),
    };

    const newRecord =
        typeof displayNewRecord === "boolean" && displayNewRecord ? (
            <Table.NewRecord onAdd={onAdd} label={newRecordLabel} />
        ) : (
            displayNewRecord
        );

    return (
        <div className="flex h-full flex-col gap-5 overflow-auto">
            <Table {...tableProps}>
                <div className="flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center">
                    <div className="flex items-center justify-between gap-3 sm:justify-normal">
                        <Table.Search />
                        <Table.View />
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <Table.Download />
                        {newRecord}
                    </div>
                </div>
                <div
                    className="relative flex flex-1 flex-col overflow-hidden rounded-lg border border-border shadow-md"
                    ref={parent}
                >
                    <Table.Table
                        canView={canView}
                        hideRowActions={hideRowActions}
                        hiddenActionsContent={hiddenActionsContent}
                        actions={
                            hideAllRowsActions ? null : (
                                <Table.Actions
                                    onUpdate={onUpdate}
                                    actions={actions}
                                />
                            )
                        }
                        newRecord={newRecord}
                    />
                    {displayTableRecord && <Table.TableRecord />}
                    <Table.Pagination />
                </div>
                <Table.Selected />
            </Table>
        </div>
    );
}
