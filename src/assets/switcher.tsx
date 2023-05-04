

import type { SwitchChangeEventHandler } from 'rc-switch';
import Switch from 'rc-switch';

const onChange: SwitchChangeEventHandler = (value, event) => {
    // eslint-disable-next-line no-console
    console.log(`switch checked: ${value}`, event);
}

const Sw = () => {
    return (
        <Switch
            onChange={onChange}
        />
    )
}

export default Sw;