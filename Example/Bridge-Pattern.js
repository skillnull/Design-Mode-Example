// 桥接模式(Bridge Pattern)

// 实现部分
class EmailSender {
    send(content) {
        console.log(`邮件发送：${content}`)
    }
}

class SmsSender {
    send(content) {
        console.log(`短信发送：${content}`)
    }
}

// 抽象部分
class Message {
    constructor(sender) {
        this.sender = sender
    }

    send(content) {
        return this.sender.send(content)
    }
}

class NormalMessage extends Message {
    send(content) {
        return this.sender.send(content)
    }
}

class UrgentMessage extends Message {
    send(content) {
        return this.sender.send(`[紧急] ${content}`)
    }
}


// 自由组合：

// 邮件发送：会议通知
const normalEmail = new NormalMessage(new EmailSender())
normalEmail.send('会议通知')

// 短信发送：[紧急] 服务器异常
const urgentSms = new UrgentMessage(new SmsSender())
urgentSms.send('服务器异常')

