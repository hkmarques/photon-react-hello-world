import React, { Component } from 'react';
import './App.css';
import Window from './components/Window';
import Content from './components/Content';
import { Pane, Sidebar, PaneGroup } from './components/Misc';

class App extends Component {
  render() {
    return (
      <Window>
        <header
          class="toolbar toolbar-header"
          style={{ '-webkit-app-region': 'drag' }}
        >
          <h1 class="title">Hello World!</h1>

          <div class="toolbar-actions">
            <div class="btn-group">
              <button class="btn btn-default">
                <span class="icon icon-home" />
              </button>
              <button class="btn btn-default">
                <span class="icon icon-folder" />
              </button>
              <button class="btn btn-default active">
                <span class="icon icon-cloud" />
              </button>
              <button class="btn btn-default">
                <span class="icon icon-popup" />
              </button>
              <button class="btn btn-default">
                <span class="icon icon-shuffle" />
              </button>
            </div>

            <button class="btn btn-default">
              <span class="icon icon-home icon-text" />
              Filters
            </button>

            <button class="btn btn-default btn-dropdown pull-right">
              <span class="icon icon-megaphone" />
            </button>
          </div>
        </header>
        <Content>
          <Sidebar>
            <nav class="nav-group">
              <h5 class="nav-group-title">Favorites</h5>
              <a class="nav-group-item active">
                <span class="icon icon-home" />
                me
              </a>
              <span class="nav-group-item">
                <span class="icon icon-download" />
                Downloads
              </span>
              <span class="nav-group-item">
                <span class="icon icon-folder" />
                Documents
              </span>
              <span class="nav-group-item">
                <span class="icon icon-signal" />
                AirPlay
              </span>
              <span class="nav-group-item">
                <span class="icon icon-print" />
                Applications
              </span>
              <span class="nav-group-item">
                <span class="icon icon-cloud" />
                Desktop
              </span>
            </nav>
          </Sidebar>
          <Pane>
            <PaneGroup>
              <Pane>
                <form>
                  <div class="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" rows="3" />
                  </div>
                  <select class="form-control">
                    <option>Option one</option>
                    <option>Option two</option>
                    <option>Option three</option>
                    <option>Option four</option>
                    <option>Option five</option>
                    <option>Option six</option>
                    <option>Option seven</option>
                    <option>Option eight</option>
                  </select>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" /> This is a checkbox
                    </label>
                  </div>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" /> This is a checkbox too
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input type="radio" name="radios" checked />
                      Keep your options open
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input type="radio" name="radios" />
                      Be sure to remember to check for unknown unknowns
                    </label>
                  </div>
                  <div class="form-actions">
                    <button type="submit" class="btn btn-form btn-default">
                      Cancel
                    </button>
                    <button type="submit" class="btn btn-form btn-primary">
                      OK
                    </button>
                  </div>
                </form>
              </Pane>
              <Pane>
                <table class="table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Kind</th>
                      <th>File Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                  </tbody>
                </table>
              </Pane>
            </PaneGroup>
          </Pane>
        </Content>
        <footer class="toolbar toolbar-footer">
          <div class="toolbar-actions">
            <button class="btn btn-default">Cancel</button>

            <button class="btn btn-primary pull-right">Save</button>
          </div>
        </footer>
      </Window>
    );
  }
}

export default App;
