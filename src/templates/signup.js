exports.render = () => {
  return `<form>
        <div className="list">
            <label className="item item-input item-stacked-label">
                <span className="input-label">Name</span>
                <input type="text" data-name/>
            </label>
            <label className="item item-input item-stacked-label">
                <span className="input-label">Email</span>
                <input type="text" data-email/>
            </label>
            <label className="item item-input item-stacked-label">
                <span className="input-label">Password</span>
                <input type="password" data-password/>
            </label>
        </div>
        <div className="padding">
            <button className="button button-block" data-signup>
                <i className="ion-thumbsub"></i> Register
            </button>
        </div>
    </form>`;
};
