export const disableRemove = (allItems, setDisable) => {
    if (allItems) {
        if (allItems.quantity > 0) {
            return setDisable(false);
        } else return setDisable(true);
    } else return setDisable(true);
}