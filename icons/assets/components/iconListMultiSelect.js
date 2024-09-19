import { html } from 'lit';

export const iconListMultiSelect = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m4.5,18h-2c-.68945,0-1.25-.56055-1.25-1.25v-2c0-.68945.56055-1.25,1.25-1.25h2c.68945,0,1.25.56055,1.25,1.25v2c0,.68945-.56055,1.25-1.25,1.25Zm-1.75-1.5h1.5v-1.5h-1.5v1.5Zm1.75-1.5h.00977-.00977Z" stroke-width="0"/><path d="m5.80811,1.60156c-.33594-.23828-.80615-.15918-1.04541.17871l-1.47949,2.08691-.61963-.6377c-.28955-.29688-.76318-.30273-1.06104-.01562-.29688.28906-.30371.76367-.01514,1.06055l1.24805,1.28418c.0163.0166.03815.02295.05554.0376.01843.01611.02869.03784.04895.05225.0321.02271.06824.03369.10248.05078.02429.01196.04639.02612.07159.0354.08441.03125.17114.05151.25903.05151h.00049c.10681,0,.21106-.02881.31012-.07397.0307-.01392.05493-.03613.08374-.05444.04346-.02734.0907-.04639.12909-.0835.02051-.02002.02869-.04639.04639-.06787.01233-.01489.03113-.02051.04248-.03662l2.00098-2.82227c.23975-.33789.15967-.80566-.17822-1.0459Z" stroke-width="0"/><path d="m5.80811,7.60156c-.33594-.2373-.80615-.15918-1.04541.17871l-1.47949,2.08691-.61963-.6377c-.28955-.2959-.76318-.30371-1.06104-.01562-.29688.28906-.30371.76367-.01514,1.06055l1.24805,1.28418c.0163.0166.03815.02295.05554.0376.01843.01611.02869.03784.04895.05225.0321.02271.06824.03369.10248.05078.02429.01196.04639.02612.07159.0354.08441.03125.17114.05151.25903.05151h.00049c.10681,0,.21106-.02881.31012-.07397.0307-.01392.05493-.03613.08374-.05444.04346-.02734.0907-.04639.12909-.0835.02051-.02002.02869-.04639.04639-.06787.01233-.01489.03113-.02051.04248-.03662l2.00098-2.82227c.23975-.33789.15967-.80566-.17822-1.0459Z" stroke-width="0"/><path d="m17.25,16.52148H8c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h9.25c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z" stroke-width="0"/><path d="m17.25,10.52148H8c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h9.25c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z" stroke-width="0"/><path d="m17.25,4.52148H8c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h9.25c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z" stroke-width="0"/></svg>`;
};
export default iconListMultiSelect;
