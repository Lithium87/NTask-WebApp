exports.render = () => {
  return `<form>
        <div className="list">
            <label className="item item-input item-stacked-label">
                <span className="input-labe">Email</span>
                <input type="text" data-email/>
            </label>
            <label className="item item-input item-stacked-label">
                <span className="input-label">Password</span>
                <input type="password" data-password/>
            </label>
        </div>
        <div className="padding">
            <button className="button button-positive button-block">
                <i className="ion-home"></i> Sign in
            </button>
        </div>
    </form>
    <div className="padding">
        <button className="button button-block" data-signup>
            <i className="ion-person-add"></i> Sign up
        </button>
    </div>`;
};
