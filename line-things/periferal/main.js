/*
 * Copyright (c) 2016-2018  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK.
 *
 *   This work is licensed under the
 *       Creative Commons Attribution 4.0 International License.
 *   To view a copy of this license, visit
 *       <http://creativecommons.org/licenses/by/4.0>.
 *   or send a letter to Creative Commons, PO Box 1866,
 *   Mountain View, CA 94042, USA.
 *
 */

/* global trace */

import LineThingsServer from './line-things-server'

const server = new LineThingsServer()
const buttonA = global.button.a

buttonA.onChanged = function () {
  const value = this.read() === 1 ? 0 : 1
  if (server.notifyCharacteristic != null) {
    server.notifyValue(server.notifyCharacteristic, value)
  }
}

trace(server)