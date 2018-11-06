export const type = {
    TOGGLE_COLLAPSED: 'TOGGLE_COLLAPSED'

}

export function toggleCollapsed(collapsed) {
    return {
        type: type.TOGGLE_COLLAPSED,
        collapsed: collapsed
    }
}